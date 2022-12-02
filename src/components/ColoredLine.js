const ColoredLine = ({ color }) => {
    return(
      <hr
        style={{
          color: color,
          backgroundColor: color,
          height: 5,
          width: 1000
        }}
        className="line"
      />
    );
}
export default ColoredLine;