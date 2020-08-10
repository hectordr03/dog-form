import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText, CustomInput } from 'reactstrap';


const DogForm = () => {
    const [value, setValue] = React.useState({});

    return (
        <div className="Dog-Form" >
            <Form>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label>Name:</Label>
                            <Input type="text" placeholder="Pet's name" />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label>Image:</Label>
                            {/* Input tag messed with form layout */}
                            <CustomInput type="file" name='Image' />
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label>Name:</Label>
                            <Input type="text" placeholder="Pet's name" />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label>Breed:</Label>
                            <Input type="text" placeholder="Pet's breed" />
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
        </div >
    )
}


export default DogForm;