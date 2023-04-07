import {
    MultiChatWindow,
    MultiChatSocket,
    useMultiChatLogic,
  } from 'react-chat-engine-advanced';
  
const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        'e25118ab-4111-40e1-aafb-675839ab2bd7',
        'katrina',
        'secret_1234'
      );
      return (
        <>
          <MultiChatWindow {...chatProps} />
          <MultiChatSocket {...chatProps} />
        </>
      );
  };
  export default ChatsPage;