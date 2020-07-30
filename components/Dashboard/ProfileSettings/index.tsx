import React, { useState } from "react";
import { DevTool } from "react-hook-form-devtools";
import { FiX } from "react-icons/fi";
import { useForm, useFieldArray } from "react-hook-form";
import { useMutation } from "@apollo/client";
import np from "nprogress";
import * as yup from "yup";
import { Row, Column } from "styled-grid-system-component";
import { Card, CardHeader } from "components/Card";
import Input from "components/Form/Input";
import Button from "components/Button";
import { UPDATE_PROFILE, ME } from "quries/AUTH";
import sweetAlert from "sweetalert";
import ProfilePhoto from "./ProfilePhoto";
import "twin.macro";
// import { Container } from './styles';

interface Props {
  user: any;
}

const ProfileSettings: React.FC<Props> = ({ user }: Props) => {
  const [checked, setChecked] = useState(false);
  let [updateProfile, { loading }] = useMutation(UPDATE_PROFILE, {
    refetchQueries: [{ query: ME }],
  });

  if (loading) np.start();
  else np.done();

  let validationSchema = yup.object().shape({
    name: yup.string().required("Required"),
    education: yup.string(),
    designation: yup.string(),
    location: yup.string(),
    bio: yup.string(),
    // workInfo: yup.string().required('Required'),
    skills: yup.array().of(yup.string().required("Required")),
    links: yup.array().of(
      yup.object().shape({
        text: yup.string().required("Required"),
        link: yup.string().url("Invalid URL").required("Required"),
      })
    ),
    workInfo: yup.array().of(
      yup.object().shape({
        name: yup.string().required("Required"),
        designation: yup.string().required("Required"),
        startTime: yup.string().required("Required"),
        endTime: yup.string(),
      })
    ),
  });

  const { register, handleSubmit, errors, control, reset, getValues } = useForm(
    {
      validationSchema,
      defaultValues: {
        ...user,
      },
    }
  );

  const {
    fields: skillFields,
    append: appendSkill,
    remove: removeSkill,
  } = useFieldArray({
    control,
    name: "skills",
  });

  const {
    fields: workInfoFileds,
    append: appendWorkInfo,
    remove: removeWorkInfo,
  } = useFieldArray({
    control,
    name: "workInfo",
  });

  const {
    fields: linkFields,
    append: appendLink,
    remove: removeLink,
  } = useFieldArray({
    control,
    name: "links",
  });

  const onSubmit = (variables) => {
    if (!variables.skills) variables.skills = [];
    if (!variables.links) variables.links = [];
    if (!variables.workInfo) variables.workInfo = [];
    updateProfile({ variables }).then(() => {
      sweetAlert(
        "হুররে!! ",
        "আপনার প্রোফাইল সফলভাবে হালনাগাদ করা হয়েছে",
        "success"
      );
    });
  };

  return (
    <>
      {process.env.NODE_ENV !== "production" && <DevTool control={control} />}
      <ProfilePhoto profilePic={user?.profilePhoto} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <CardHeader>সাধারন তথ্যসমূহ</CardHeader>
          <Input
            name="name"
            isRequired
            inputRef={register()}
            placeholder="আপনার নাম"
            label="নাম"
            hasError={errors?.name}
            helperText={errors?.name?.message}
          />
          <Input
            name="username"
            inputRef={register()}
            placeholder="আপনার ইউজারনেম"
            label="ইউজারনেম"
            defaultValue={getValues("username")}
            displayOnly={true}
          />
          <Input
            name="email"
            inputRef={register()}
            placeholder="আপনার ইমেইল"
            label="ইমেইল"
            defaultValue={getValues("email")}
            displayOnly={true}
          />
          <Input
            name="location"
            inputRef={register()}
            placeholder="আপনার ঠিকানা"
            label="ঠিকানা"
            hasError={errors?.location}
            helperText={errors?.location?.message}
          />
          <Input
            name="education"
            inputRef={register()}
            placeholder="আপনার শিক্ষাগত যোগ্যতা"
            label="শিক্ষাগত যোগ্যতা"
            hasError={errors?.education}
            helperText={errors?.education?.message}
          />
          <Input
            name="designation"
            inputRef={register()}
            placeholder="আপনার পেশাগত বা মনস্তাত্বিক উপাধি"
            label="পেশাগত উপাধি (Designation or job title)"
            hasError={errors?.designation}
            helperText={errors?.designation?.message}
          />
          <Input
            name="bio"
            type="textarea"
            inputRef={register()}
            placeholder="আপনার সম্পর্কে কিছু কথা লিখুন...।"
            label="জীবন বৃত্তান্ত"
            hasError={errors?.bio}
            helperText={errors?.bio?.message}
          />
          <Button type="submit" color="primary" size="small">
            হালনাগাদ
          </Button>
        </Card>

        <div tw="mb-8"></div>

        <Card>
          <CardHeader>আপনার ওয়েবসাইট সমূহ</CardHeader>
          {linkFields.map((field, index) => (
            <Row key={field.id}>
              <Column md={5}>
                <Input
                  type="text"
                  inputRef={register()}
                  name={`links[${index}].text`}
                  placeholder="ওয়েবসাইট এর নাম"
                  hasError={errors?.links && errors?.links[index]?.text}
                  helperText={
                    errors?.links && errors?.links[index]?.text?.message
                  }
                  label="ওয়েবসাইট এর নাম"
                />
              </Column>
              <Column md={5}>
                <Input
                  type="text"
                  inputRef={register()}
                  name={`links[${index}].link`}
                  label="ওয়েবসাইট এর লিংক"
                  placeholder="ওয়েবসাইট এর লিংক"
                  hasError={errors?.links && errors?.links[index]?.link}
                  helperText={
                    errors?.links && errors?.links[index]?.link?.message
                  }
                />
              </Column>
              <Column md={2}>
                <Button onClick={() => removeLink(index)}>
                  <FiX />
                </Button>
              </Column>
            </Row>
          ))}
          <Button
            color="primary"
            size="small"
            onClick={() => appendLink({ text: "", link: "" })}
          >
            +
          </Button>
          <Button type="submit">হালনাগাদ করুন</Button>
        </Card>

        <div tw="mb-8"></div>

        <Card>
          <CardHeader>কর্মস্থল এর তথ্য</CardHeader>
          {workInfoFileds.map((field, index) => (
            <div key={field.id}>
              <Input
                type="text"
                inputRef={register()}
                name={`workInfo[${index}].name`}
                placeholder="text"
                hasError={errors?.workInfo && errors?.workInfo[index]?.name}
                helperText={
                  errors?.workInfo && errors?.workInfo[index]?.name?.message
                }
                label="Name"
              />

              <Input
                type="text"
                inputRef={register()}
                name={`workInfo[${index}].designation`}
                placeholder="Designation"
                hasError={
                  errors?.workInfo && errors?.workInfo[index]?.designation
                }
                helperText={
                  errors?.workInfo &&
                  errors?.workInfo[index]?.designation?.message
                }
                label="Designation"
              />
              <Input
                type="date"
                inputRef={register()}
                name={`workInfo[${index}].startTime`}
                placeholder="link"
                hasError={
                  errors?.workInfo && errors?.workInfo[index]?.startTime
                }
                helperText={
                  errors?.workInfo &&
                  errors?.workInfo[index]?.startTime?.message
                }
                label="Start Time"
              />
              <Input
                type="date"
                inputRef={register()}
                name={`workInfo[${index}].endTime`}
                placeholder="link"
                hasError={errors?.workInfo && errors?.workInfo[index]?.endTime}
                helperText={
                  errors?.workInfo && errors?.workInfo[index]?.endTime?.message
                }
                label="End Time"
              />

              <Column md={2}>
                <Button onClick={() => removeWorkInfo(index)}>&times;</Button>
              </Column>
            </div>
          ))}

          <Row>
            <Column>
              <Button
                onClick={() =>
                  appendWorkInfo({
                    text: "",
                    designation: "",
                    startTime: "",
                    endTime: "",
                  })
                }
              >
                নতুন আরেকটি
              </Button>
              <Button type="submit">হালনাগাদ করুন</Button>
            </Column>
          </Row>
        </Card>

        <div tw="mb-8"></div>

        <Card>
          <CardHeader>আপনার দক্ষতা সমূহ</CardHeader>
          {skillFields.map((field, index) => (
            <Row key={field.id}>
              <Column md={5}>
                <Input
                  type="text"
                  inputRef={register()}
                  name={`skills[${index}]`}
                  placeholder={`দক্ষতা ${index + 1}`}
                  hasError={errors?.skills && errors?.skills[index]}
                  helperText={errors?.skills && errors?.skills[index]?.message}
                  label={`দক্ষতা ${index + 1}`}
                />
              </Column>
              <Column md={2}>
                <Button onClick={() => removeSkill(index)}>x</Button>
              </Column>
            </Row>
          ))}
          <Button onClick={() => appendSkill({ value: "" })}>+</Button>
          <Button type="submit">হালনাগাদ করুন</Button>
        </Card>
      </form>
    </>
  );
};
// hey
export default ProfileSettings;
