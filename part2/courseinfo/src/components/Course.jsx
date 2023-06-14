const Header = ({ text }) => <h1>{text}</h1>;

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Sum = ({ parts }) => (
  <p style={{ fontWeight: "bold" }}>
    total of {parts.reduce((prev, curr) => prev + curr.exercises, 0)} exercises
  </p>
);

const Content = ({ parts }) => (
  <>
    {parts.map((part) => (
      <Part key={part.id} part={part} />
    ))}
  </>
);

const Course = ({ course }) => {
  const { name, parts } = course;
  return (
    <>
      <Header text={name} />
      <Content parts={parts} />
      <Sum parts={parts} />
    </>
  );
};

export default Course;
