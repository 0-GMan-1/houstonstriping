const ColoredLine = ({ color,}) => {
    return(
      <hr
        style={{
          color: color,
          backgroundColor: color,
          height: 0.3,
          width: 1000
        }}
        className="line"
      />
    );
}
export default ColoredLine;