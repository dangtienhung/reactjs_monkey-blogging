import {
  deleteObject,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { useState } from 'react';

export const useFirebaseImage = (getValues, setValue) => {
  const [progress, setProgress] = useState(0);
  const [image, setImage] = useState('');

  if (!getValues || !setValue) return;

  const handleUploadImage = (file) => {
    const storage = getStorage();
    // Upload file and metadata to the object 'images/mountains.jpg'
    const storageRef = ref(storage, 'images/' + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);
    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progressPercent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progressPercent + '% done');
        setProgress(progressPercent);
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
          default:
            console.log('Nothing at all!');
        }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break;
          case 'storage/canceled':
            // User canceled the upload
            break;
          case 'storage/unknown':
            // Unknown error occurred, inspect error.serverResponse
            break;
          default:
            console.log('Nothing at all!');
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          setImage(downloadURL);
        });
      }
    );
  };

  const handleSelectImage = (e) => {
    const file = e.target.files[0];
    console.log('🚀 ~ file: PostAddNew.jsx:87 ~ onSelectImage ~ file', file);
    if (!file) return;
    setValue('image_name', file.name);
    // handleUploadImage(file);
  };

  /* xóa hình ảnh đã chọn */
  const handleDelete = () => {
    const accept = confirm('Are you sure you want to delete?');
    if (accept) {
      const storage = getStorage();
      // Create a reference to the file to delete
      const imageRef = ref(storage, 'images/' + getValues('image_name'));
      // Delete the file
      deleteObject(imageRef)
        .then(() => {
          alert('Deleted successfully!');
          setImage('');
          setProgress(0);
        })
        .catch((error) => {
          alert('Cannot deleted!');
        });
    }
  };

  return { image, progress, handleSelectImage, handleDelete };
};
