import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Field } from '../../../components/field';
import { Label } from '../../../components/layouts/label';
import { Input } from '../../../components/layouts/input';
import { Button } from '../../../components/button';
import { Checkbox, DropDown, Option, Radio } from '../../../components/layouts';

const PostAddNewStyle = styled.div``;

const PostAddNew = () => {
  const { handleSubmit, watch, setValue, control } = useForm({
    mode: 'onChange',
    defaultValues: {
      status: '',
      category: '',
    },
  });
  const watchStatus = watch('status');
  const watchCategory = watch('category');
  console.log(
    '🚀 ~ file: PostAddNew.jsx:22 ~ PostAddNew ~ watchCategory',
    watchCategory
  );
  return (
    <PostAddNewStyle>
      <h1 className="dashboard-heading">Add new post</h1>
      <form action="">
        <div className="grid grid-cols-2 gap-x-10 mb-10">
          <Field>
            <Label>Title</Label>
            <Input
              control={control}
              placeholder="Enter your title"
              name="title"
            />
          </Field>
          <Field>
            <Label>Slug</Label>
            <Input
              control={control}
              placeholder="Enter your slug"
              name="slug"
            />
          </Field>
        </div>
        <div className="grid grid-cols-2 gap-x-10 mb-10">
          <Field>
            <Label>Status</Label>
            <div className="flex items-center gap-x-5">
              <Radio
                name={'status'}
                control={control}
                checked={watchStatus === 'approved'}
                onClick={() => setValue('status', 'approved')}
                value="approved"
              >
                Approved
              </Radio>
              <Radio
                name={'status'}
                control={control}
                value="pending"
                checked={watchStatus === 'pending'}
                onClick={() => setValue('status', 'pending')}
              >
                Pedding
              </Radio>
              <Radio
                name={'status'}
                control={control}
                value="reject"
                checked={watchStatus === 'reject'}
                onClick={() => setValue('status', 'reject')}
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
