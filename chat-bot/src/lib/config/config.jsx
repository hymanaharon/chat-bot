import { createChatBotMessage } from 'react-chatbot-kit';
import { Divider, Typography } from 'antd'
import DogPicture from '../../components/DogWidget'

const {Title, Text} = Typography
const config = {
  initialMessages: [createChatBotMessage(`Welcome to your site`)],
  botName: 'Insite',
  customComponents: {
    // Replaces the default header
    header: () => {
      return (
        <div style={{background: 'lightGrey', padding: 5}}>
          <Title level={5} >Your Insite Bot</Title>
          <Text type='secondary' style={{fontSize: 10}}>Powered By Elementor</Text>
        </div>
      )
    },
    // Replaces the default bot avatar
    // botAvatar: (props) => <MyAvatar {...props} />,
    // // Replaces the default bot chat message container
    // botChatMessage: (props) => <MyCustomChatMessage {...props} />,
    // // Replaces the default user icon
    // userAvatar: (props) => <MyCustomAvatar {...props} />,
    // // Replaces the default user chat message
    // userChatMessage: (props) => <MyCustomUserChatMessage {...props} />
  },
  widgets: [
    {
      widgetName: 'dogPicture',
      widgetFunc: (props) => <DogPicture {...props} />,
    },
  ],
};

export default config;