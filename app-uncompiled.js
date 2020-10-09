// Empty
$(document).ready(function() {
class Bubble extends React.Component {
  render () {
    <div class="bubble">
      <h3 class={this.props.propKey + " bubble"}>{this.props.title}</h3>
      <p>You logged {this.props.propValue} {this.props.quant} for {this.props.title.toLowerCase()}.</p>
    </div>
  }
}

// Searches to see if an object in the array specified has the value provided set as the "key"
function searchArray(keyword, array){
  // For each item in the array
  for (var i=0; i < array.length; i++) {
    // If the value under key "key" is equal to var keyword
    if (array[i].key === keyword) {
      // Returns the object
      return array[i];
    }
    // Else keeps iterating
  }
}

// Function to render Day Overview section
function populateDayOverview(date, data) {
  let dataElements = [];
  for (const [key, value] of Object.entries(data)) {
    let keyword = key;
    let object = searchArray(keyword, categories);
    let bubble = <Bubble 
      propKey={keyword}
      title={object.title}
      quant={object.quant}
      propValue = {value}
    />;
    dataElements.push(bubble);
  }
  ReactDOM.render(
    <div>{dataElements}</div>,
    document.getElementById('day-info')
  );
}
}
