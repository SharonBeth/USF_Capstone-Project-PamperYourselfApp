import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
import { render } from "react-dom";
import YouTubeApi from '../YouTubeApi';

function SearchForm ({externalAPICall, videos}) {
  const history = useNavigate();
  const [change, setChange] = useState();
  const initialState = {category: "", q: "", qExclude : ""};
  const [formData, setFormData] = useState(initialState);
  const [formErrors, setFormErrors] = useState([]);
  // const [videos, setVideos] = useState();

  // async function callForVideos(endpoint, data, method){
  //   let res = await YouTubeApi.loadClient();
    
  //   console.log(data.category+"data.category")
  //   let test = await YouTubeApi.execute("", data, );
  //   console.log("test completed")
  //   console.log(test.result.items)
  //   console.log("testing below is one array")
  //   console.log(test.result.items)
  //   setVideos(test.result.items);
  //   console.log(videos)
  //   return {success: true};
  // }

  const handleChange = (evt) => {
    const {name, value} = evt.target;
        setFormData(formData=>({
            ...formData,
            [name]:value
        }));
      }
const handleSubmit = async (evt) => {
    evt.preventDefault();
    console.log(formData)
    let call = await externalAPICall("", formData, );
    console.log(videos)
    console.log("after res")
    console.log(call.success)
    if(call.success) {
      console.log("call-success")
      history('/carousel');
    }else{
        setFormErrors(call.errors);
    }
}
  return(
    <div>
      <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="category">Choose a Category from the Drop Down Menu</Label>
                    <Input
                        type="select"
                        name="category"
                        id="category"
                        onChange={handleChange}
                        value={formData.category}
                    > 
                      <option></option>
                      <option>Hair</option>
                      <option>Nails</option>
                      <option>Skin Care</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="q">Include the following for searching</Label>
                    <Input
                        type="text"
                        name="q"
                        id="q"
                        onChange={handleChange}
                        value={formData.q}
                        placeholder="Suggestions...Braids, Press-On Nails, smokey-eye make-up"
                    />
                    
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="qExclude">This will exclude things from our search.</Label>
                    <Input
                        type="text"
                        name="qExclude"
                        id="qExclude"
                        onChange={handleChange}
                        value={formData.qExclude}
                        placeholder="This one is okay to leave blank"
                    />
                </FormGroup>
                <Button>Pampering Yourself Begins Here</Button>
            </Form>
    </div>
  )

}

export default SearchForm;