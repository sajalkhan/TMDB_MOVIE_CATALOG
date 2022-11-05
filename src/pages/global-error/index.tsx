import { ErrorMessage } from 'components/atoms/error-message';
import { Section } from 'components/molecules/section';
import { errorResParser } from 'libs/utils';
import React from 'react';

interface GlobalErrorProps {
  error?: Error;
  onReset?: () => void;
}

const GlobalError: React.FC<GlobalErrorProps> = ({ error, onReset }) => {
  const errorRes = errorResParser(error);

  return (
    <Section className="p-global-error__section" padding="none" size="large-mobile">
      <button onClick={onReset}>X</button>
      <ErrorMessage error={errorRes} />
    </Section>
  );
};

export default GlobalError;
