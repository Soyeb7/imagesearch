import React from "react"


// Components
import ImageSearch from './ImageSearch/ImageSearch'
import ImageList from './ImageList/ImageList'

const API_KEY = "17616775-7520c8f78c150fab8bc675fe4"



// Class based component
class App extends React.Component {

  state = {
    images: [],

    error: null
  }

  // This Method is responsibile for making request to the url. This method will be run when the form is submitted on ImageSearch
  handleGetRequest = async (e) => {

    e.preventDefault()

    const searchTerm = e.target.elements.searchValue.value

    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${searchTerm}&image_type=photo&pretty=true`


    const request = await fetch(url)

    const response = await request.json()

    // IF input field is empty, then set error. Also if no images are returned then give error
    if (!searchTerm) {
      this.setState({error: "Please provide a value"})
    } else if( !response.hits.length > 0 ) {
      this.setState({error: "No results found, please search for another term "})
    }
    else {

      this.setState({ images: response.hits, error: null })

    }



  }


  

  render() {
    return(
      <div>

        {/* Trigger handle get request when form is submitted on ImageSearch component. We will pass it as props */}
        <ImageSearch handleGetRequest={this.handleGetRequest} />


        {/* If error exists then display error message else display the images. */}
        { 
          this.state.error !== null ? <div style={{color: "red", textAlign: "center"}}> {this.state.error} </div> : <ImageList images={this.state.images} />
        }

      </div>
    )
  }
}

export default App