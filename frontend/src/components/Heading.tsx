export const Heading = (
  { headingText = "Run Chat GPT App" }: { headingText?: string }
) => {
  return (
    <p>
        {headingText}
    </p>
  );
};