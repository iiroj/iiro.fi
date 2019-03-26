import PropTypes from "prop-types";
import React, { useCallback, useRef, useState } from "react";
import styled from "styled-components";

import Send from "./Send";
import Typing from "./Typing";

const REPLY_URL = `${process.env.LAMBDA_BASE_URL}/telegram`;

const Form = styled.form(
  {
    alignItems: "center",
    display: "flex",
    position: "relative",
    transition: "all 125ms ease-in-out"
  },
  props =>
    props.dirty && {
      flexBasis: "100%",
      marginTop: "1rem"
    },
  props =>
    props.ready && {
      marginLeft: "auto"
    }
);

const Button = styled.button(
  {
    appearance: "none",
    background: "none",
    borderRadius: "0.5rem",
    border: "none",
    bottom: 0,
    cursor: "pointer",
    display: "block",
    outline: "none",
    padding: "1rem",
    pointerEvents: "none",
    position: "absolute",
    right: 0,
    transition: "all 125ms ease-in-out",

    "&:hover svg circle": {
      fill: "var(--actionable)"
    },

    i: {
      bottom: "1.5rem",
      left: "-2.5rem",
      position: "absolute"
    }
  },
  props =>
    props.valid && {
      pointerEvents: "unset",

      svg: {
        circle: {
          fill: "var(--actionable)",
          stroke: "none"
        },

        path: {
          fill: "var(--text-primary)",
          stroke: "none"
        }
      }
    }
);

const Input = styled.textarea(
  {
    appearance: "none",
    borderRadius: "0.5rem",
    border: "none",
    cursor: "pointer",
    fontFamily: "inherit",
    height: "4rem",
    lineHeight: "2rem",
    opacity: 0,
    outline: "none",
    padding: "1rem 2rem",
    resize: "none",
    transition: "all 125ms ease-in-out",
    width: "4rem",

    "&:focus": {
      border: "2px solid var(--actionable)",
      paddingRight: "4rem"
    },

    "&:disabled": {
      background: "var(--background-secondary)",
      border: "none",
      pointerEvents: "none"
    }
  },
  props =>
    props.expanded && {
      backgroundColor: "var(--background-primary)",
      border: "2px solid var(--background-secondary)",
      color: "var(--text-primary)",
      cursor: "text",
      height: "auto",
      opacity: 1,
      resize: "vertical",
      width: "100%"
    }
);

const Reply = ({ onSentFeedback, ready }) => {
  const inputRef = useRef(null);
  const [dirty, setDirty] = useState(false);
  const [failed, setFailed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [text, setText] = useState("");
  const [valid, setValid] = useState(false);

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();
      setSubmitting(true);
      return new Promise((resolve, reject) => {
        setTimeout(reject, 10000);
        fetch(REPLY_URL, {
          method: "POST",
          body: JSON.stringify(text),
          headers: new Headers({
            "Content-Type": "text/plain"
          })
        })
          .then(resolve)
          .catch(reject);
      })
        .then(response => {
          if (response.status !== 204) throw new Error(response.status);
          inputRef.current.blur();
          setDirty(false);
          setSubmitting(false);
          setText("");
          setValid("");
          onSentFeedback();
        })
        .catch(() => {
          setFailed(true);
          setSubmitting(false);
        });
    },
    [text]
  );

  return (
    <Form
      dirty={dirty}
      disabled={submitting || failed}
      onSubmit={handleSubmit}
      ready={ready}
    >
      <Input
        disabled={submitting}
        expanded={dirty && !failed}
        onChange={({ target }) => {
          setText(target.value);
          setValid(target.value !== "");
        }}
        onClick={() => setDirty(true)}
        placeholder="Send Feedback"
        ref={inputRef}
        valid={valid.toString()}
        value={text}
      />
      <Button disabled={!valid} valid={valid}>
        {submitting ? <Typing /> : <Send />}
      </Button>
    </Form>
  );
};

Reply.propTypes = {
  onSentFeedback: PropTypes.func.isRequired,
  ready: PropTypes.bool.isRequired
};

export default Reply;
