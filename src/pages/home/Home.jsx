import { Button, Checkbox, Input, Option, Radio, Select, Switch, Typography } from "@material-tailwind/react";
import { Formik } from "formik";

export default function Home() {
  return (
    <div className="p-5">

      <Formik
        initialValues={{
          username: '',
          email: '',
          habits: [],
          gender: '',
          country: '',
          accept: ''
        }}

        onSubmit={(val, { resetForm }) => {
          console.log(val);
          resetForm();

        }}
      >

        {({ handleChange, setFieldValue, handleSubmit, values }) => (
          <form onSubmit={handleSubmit} className="max-w-[350px] space-y-5">

            <div>
              <Input
                onChange={handleChange}
                value={values.username}
                label="Username" name="username" />
            </div>
            <div>
              <Input
                value={values.email}
                onChange={handleChange}
                label="Email" name="email" />
            </div>

            <div>
              <Typography>Select your habits</Typography>
              <Checkbox
                onChange={handleChange}
                label='Dancing'
                value={'dancing'}
                name="habits"
              />
              <Checkbox
                onChange={handleChange}
                label='Singing'
                value={'singing'}
                name="habits" />
            </div>

            <div>
              <Typography>Select your Gender</Typography>
              <Radio
                onChange={handleChange}
                label='Male'
                value={'male'}
                color="blue"
                name="gender"
              />
              <Radio
                onChange={handleChange}
                label='Female'
                color="pink"

                value={'female'}
                name="gender" />
            </div>

            <div>
              <Select

                onChange={(e) => setFieldValue('country', e)}
                name="country"
                label="Select Country">
                <Option value="India">India</Option>
                <Option value="china">China</Option>
                <Option value="Nepal">Nepal</Option>

              </Select>
            </div>

            <div>
              <Switch
                onChange={handleChange}
                name="accept"
                label='Accept Terms and Condition' />
            </div>

            <Button type="submit">Submit</Button>

          </form>
        )}


      </Formik>





    </div>
  )
}
