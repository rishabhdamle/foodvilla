function Title(props) {
  const { title } = props;
  return (
    <div className="pt-10 pl-15">
      <h3 className="text-orange-950 text-2xl font-bold">{title}</h3>
    </div>
  );
}
export default Title;
