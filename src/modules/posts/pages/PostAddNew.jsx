import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Field } from '../../../components/field';
import { Label } from '../../../components/layouts/label';
import { Input } from '../../../components/layouts/input';
import { Button } from '../../../components/button';

const PostAddNewStyle = styled.div``;

const PostAddNew = () => {
  const { handleSubmit, control } = useForm({ mode: 'onChange' });
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
            <Label>Author</Label>
          </Field>
        </div>
        <div className="grid grid-cols-2 gap-x-10 mb-10">
          <Field>
            <Label>Category</Label>
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
