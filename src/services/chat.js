import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState
} from "react";

import Baskerville from "../components/Baskerville";
import Emoji from "../components/Emoji";
import Link from "../components/Link";

import Fraktio from "../components/Fraktio";
import {
  Cv,
  Email,
  GitHub,
  Linkedin,
  Npm,
  Portfolio,
  Telegram,
  Twitter
} from "../components/icons";

const staticMessages = [
  <p key="1">
    Hello there! <Emoji label="Smiling Face With Sunglasses">😎</Emoji>
  </p>,
  <p key="2">My name is Iiro Jäppinen</p>,
  <p key="3">
    I’m a UX <Baskerville>&</Baskerville> UI Designer
  </p>,
  <p key="4">But I also code ECMAscript and React!</p>,
  <p key="5">
    I work at <Fraktio />
  </p>,
  <p key="6">
    There I help people realise their ideas, design useful experiences and
    create beautiful interfaces and interactions.
  </p>,
  <p key="7">
    You should email me at{" "}
    <Link href="mailto:hello@iiro.fi">
      <Emoji label="Email">
        <Email />
      </Emoji>{" "}
      hello@iiro.fi
    </Link>
    or send a tweet to{" "}
    <Link href="https://twitter.com/iirojappinen">
      <Emoji label="Twitter">
        <Twitter />
      </Emoji>{" "}
      @iirojappinen
    </Link>
  </p>,
  <p key="8">
    I also have a{" "}
    <Link href="/cv/">
      <Emoji label="CV">
        <Cv />
      </Emoji>{" "}
      CV
    </Link>
    ,{" "}
    <Link href="/portfolio/">
      <Emoji label="Portfolio">
        <Portfolio />
      </Emoji>{" "}
      Portfolio
    </Link>{" "}
    and a{" "}
    <Link href="https://fi.linkedin.com/in/iiroj">
      <Emoji label="Linkedin">
        <Linkedin />
      </Emoji>{" "}
      LinkedIn
    </Link>{" "}
    profile.
  </p>,
  <p key="9">
    Check out my{" "}
    <Link href="https://github.com/iiroj">
      <Emoji label="GitHub">
        <GitHub />
      </Emoji>{" "}
      GitHub
    </Link>{" "}
    and{" "}
    <Link href="https://www.npmjs.com/~iiroj">
      <Emoji label="npmn">
        <Npm />
      </Emoji>{" "}
      npm
    </Link>{" "}
    for my open source work.
  </p>,
  <p key="10">
    Finally, feel free to send me anonymous{" "}
    <Emoji label="Telegram">
      <Telegram />
    </Emoji>{" "}
    feedback from below. Have a nice day!
  </p>
];

const sentFeedbackMessage = (
  <p key="replied">
    <Emoji label="Check Mark">✅</Emoji> Thanks for the feedback!
  </p>
);

const noScriptMessage = (
  <p key="noscript">
    <Emoji label="Warning">⚠️</Emoji> Uh-oh! It seems you don’t have Javascript
    enabled.
  </p>
);

const randomIntFromInterval = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const waitFor = ms => new Promise(resolve => setTimeout(resolve, ms));

function* messageGenerator(i = 0) {
  while (true) yield staticMessages[i++];
}

const generateMessage = messageGenerator();

const useChatService = () => {
  const messages = useRef([
    // Replace the last message on SSR, since it's about sending Feedback
    ...staticMessages.slice(0, staticMessages.length - 1),
    noScriptMessage
  ]);
  const [firstRun, setFirstRun] = useState(true);
  const [typing, setTyping] = useState(false);

  const isReady = () =>
    staticMessages.every(msg => messages.current.includes(msg));

  const generator = async () => {
    if (isReady()) return;

    if (firstRun) {
      setTyping(true);
      setFirstRun(false);
    } else {
      await waitFor(randomIntFromInterval(10, 20) * 100);
      setTyping(true);
    }

    await waitFor(randomIntFromInterval(10, 20) * 100);
    setTyping(false);

    const message = generateMessage.next().value;
    messages.current.push(message);
  };

  useEffect(() => {
    messages.current = [];
  }, []);

  useEffect(() => {
    generator();
  });

  const handleSkip = useCallback(() => {
    messages.current = staticMessages;
    setTyping(false);
  }, []);

  const handleSentFeedback = useCallback(() => {
    messages.current.push(sentFeedbackMessage);
  }, []);

  return {
    handleSentFeedback,
    handleSkip,
    messages: messages.current,
    ready: isReady(),
    typing
  };
};

const ChatContext = React.createContext();

export const ChatProvider = ({ children }) => {
  const value = useChatService();
  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

export const useChat = () => {
  const context = useContext(ChatContext);
  return context;
};
