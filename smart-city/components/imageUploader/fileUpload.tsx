import React, { useState } from 'react';
import {Button, Container, Input, } from "./styles"

const FileUploader = (props) => { const [file, setFile] = useState(null);

const onChange = ({e}) => { setFile(e.target.files[0]); };

return ( 
<Container> 
    <Button htmlFor="filePicker">
        {/* <Label> */}
        {props.Text}
        {/* </Label> */}
    </Button>
    
    <Input id="filePicker" type="file" onChange={onChange} placeholder="Upload"/> 
    </Container> 
    )
     };

export default FileUploader;