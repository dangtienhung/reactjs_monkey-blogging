import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Field } from '../../../components/field';
import { Label } from '../../../components/layouts/label';
import { Input } from '../../../components/layouts/input';
import { Button } from '../../../components/button';
import { DropDown, ImageUpload, Option, Radio } from '../../../components/layouts';
import slugify from 'slugify';
import { postStatus } from '../../../utils/constants';
import { useFirebaseImage } from '../../../hooks/useFireBaseImage';

const PostAddNewStyle = styled.div``;

const PostAddNew = () => {
  const { handleSubmit, watch, setValue, control, getValues } = useForm({
    mode: 'onChange',
    defaultValues: {
      title: '',
      slug: '',
      status: 2,
      category: '',
    },
  });
  const watchStatus = watch('status');
  const handleAddNewPost = async (data) => {
    const cloneData = { ...data };
    cloneData.slug = slugify(data.slug || data.title);
    cloneData.status = Number(data.status);
    console.log(cloneData);
  };
  /* xử lí upload hình ảnh lên firebase */
  const { image, progress, handleSelectImage, handleDelete } = useFirebaseImage(
    setValue,
    getValues
  );
  return (
    <PostAddNewStyle>
      <h1 className="dashboard-heading">Add new post</h1>
      <form action="" onSubmit={handleSubmit(handleAddNewPost)}>
        <div className="grid grid-cols-2 gap-x-10 mb-10">
          <Field>
            <Label>Title</Label>
            <Input control={control} placeholder="Enter your title" name="title" />
          </Field>
          <Field>
            <Label>Slug</Label>
            <Input control={control} placeholder="Enter your slug" name="slug" />
          </Field>
        </div>
        <div className="grid grid-cols-2 gap-x-10 mb-10">
          <Field>
            <Label htmlFor="image">Image</Label>
            <ImageUpload
              onChange={handleSelectImage}
              handleDelete={handleDelete}
              progress={progress}
              image={image}
            />
          </Field>
          <Field>
            <Label>Status</Label>
            <div className="flex items-center gap-x-5">
              <Radio
                name={'status'}
                control={control}
                checked={Number(watchStatus) === postStatus.APPROVED}
                value={postStatus.APPROVED}
              >
                Approved
              </Radio>
              <Radio
                name={'status'}
                control={control}
                checked={Number(watchStatus) === postStatus.PENDING}
                value={postStatus.PENDING}
              >
                Pedding
              </Radio>
              <Radio
                name={'status'}
                control={control}
                checked={Number(watchStatus) === postStatus.REJECTED}
                value={postStatus.REJECTED}
              >
                Reject
              </Radio>
            </div>
          </Field>
          <Field>
            <Label>Author</Label>
            <Input control={control} placeholder="Find author" />
          </Field>
        </div>
        <div className="grid grid-cols-2 gap-x-10 mb-10">
          <Field>
            <Label>Category</Label>
            <DropDown>
              <Option>Knowledge</Option>
              <Option>Blockchain</Option>
              <Option>Setup</Option>
              <Option>Nature</Option>
              <Option>Developer</Option>
            </DropDown>
          </Field>
          <Field></Field>
        </div>
        <Button type="submit" className="mx-auto" kind={'primary'}>
          Add new post
        </Button>
      </form>
    </PostAddNewStyle>
  );
};

export default PostAddNew;
