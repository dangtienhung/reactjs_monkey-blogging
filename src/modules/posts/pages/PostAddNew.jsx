import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Field } from '../../../components/field';
import { Label } from '../../../components/layouts/label';
import { Input } from '../../../components/layouts/input';
import { Button } from '../../../components/button';
import { DropDown, ImageUpload, Radio, Toggle } from '../../../components/layouts';
import slugify from 'slugify';
import { postStatus } from '../../../utils/constants';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../../firebase/firebase-config';
import useFirebaseImage from '../../../hooks/useFireBaseImage';

const PostAddNewStyle = styled.div``;

const PostAddNew = () => {
  const { handleSubmit, watch, setValue, control, getValues } = useForm({
    mode: 'onChange',
    defaultValues: {
      title: '',
      slug: '',
      status: 2,
      hot: false,
      categoryId: '',
      image_name: '',
    },
  });
  const watchStatus = watch('status');
  const watchHot = watch('hot');

  /* xử lí upload hình ảnh lên firebase */
  const { image, progress, handleSelectImage, handleDeleteImage } = useFirebaseImage(
    setValue,
    getValues
  );
  /* lấy data categories */
  const [categories, setCategories] = useState([]);
  const [selecCategory, setSelecCategory] = useState('');

  const handleAddNewPost = async (values) => {
    const cloneData = { ...values };
    cloneData.slug = slugify(values.slug || values.title, { lower: true });
    cloneData.status = Number(values.status);
    console.log('🚀 ~ file: PostAddNew.jsx:36 ~ handleAddNewPost ~ cloneData', cloneData);
  };

  useEffect(() => {
    const getData = async () => {
      const dataCategory = [];
      const colRef = collection(db, 'categories');
      const q = query(colRef, where('status', '==', 1));
      const querySnapShot = await getDocs(q);
      querySnapShot.forEach((doc) => {
        dataCategory.push({ id: doc.id, ...doc.data() });
      });
      setCategories(dataCategory);
    };
    getData();
  }, []);

  const handleClickOption = (item) => {
    setValue('categoryId', item.id);
    setSelecCategory(item);
  };

  return (
    <PostAddNewStyle>
      <h1 className="dashboard-heading">Add new post</h1>
      <form action="" onSubmit={handleSubmit(handleAddNewPost)}>
        <div className="grid grid-cols-2 mb-10 gap-x-10">
          <Field>
            <Label>Title</Label>
            <Input control={control} placeholder="Enter your title" name="title" />
          </Field>
          <Field>
            <Label>Slug</Label>
            <Input control={control} placeholder="Enter your slug" name="slug" />
          </Field>
        </div>
        <div className="grid grid-cols-2 mb-10 gap-x-10">
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
        <div className="grid grid-cols-2 mb-10 gap-x-10">
          <Field>
            <Label>Category</Label>
            <DropDown>
              <DropDown.Select />
              <DropDown.List>
                {categories.length > 0 &&
                  categories.map((item) => (
                    <DropDown.Option key={item.id} onClick={() => handleClickOption(item)}>
                      {item.name}
                    </DropDown.Option>
                  ))}
              </DropDown.List>
            </DropDown>
          </Field>
          <Field>
            <Label>Feature post</Label>
            <Toggle on={watchHot === true} onClick={() => setValue('hot', !watchHot)} />
          </Field>
        </div>
        <div className="grid grid-cols-1 mb-10">
          <Field>
            <Label htmlFor="image">Image</Label>
            <ImageUpload
              onChange={handleSelectImage}
              handleDelete={handleDeleteImage}
              progress={progress}
              image={image}
              className="h-[250px]"
            />
          </Field>
        </div>
        <Button type="submit" className="mx-auto" kind={'primary'}>
          Add new post
        </Button>
      </form>
    </PostAddNewStyle>
  );
};

export default PostAddNew;
