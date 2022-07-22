import { Typography } from '@mui/material';
import React from 'react';

export function Instruction() {
  return (
    <>
      <Typography variant="h5">How it works:</Typography>
      <ul>
        <li>
          Currently there is only one quiz available: <strong>"Find compile errors"</strong>
        </li>
        <li>
          Questions are suited for the <strong>Java SE 17 Developer (1Z0-829)</strong> exam
        </li>
        <li>
          Your goal is to find out why given code snippets <strong>do not compile</strong>
        </li>
        <li>Questions are presented in random order</li>
        <li>
          Code has been tested using <strong>OpenJDK 17.0.2</strong>
        </li>
      </ul>
    </>
  );
}
