function Description({ title, description }) {
  return (
    <>
      <h1>{title}</h1>
      <p
        style={{
          marginTop: '-1rem',
          color: 'var(--gray',
        }}
      >
        {description}
      </p>
    </>
  );
}

export default Description;
