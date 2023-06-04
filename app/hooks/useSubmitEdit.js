const useSubmitEdit = (formRef, currentIndex) => {
    if (currentIndex < formRef.current.length - 1) {
      formRef.current[currentIndex + 1].focus();
    }
  };
  
  export default useSubmitEdit;
  