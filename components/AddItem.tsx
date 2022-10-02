import { useForm } from "react-hook-form";

const AddItem = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = () => console.log("hoge");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <label>title</label>
      <input {...register("itemTitle", { required: true })} />
      {errors.itemTitle && <span>This field is required</span>}
      <label>contents</label>
      <input {...register("itemValue", { required: true })} />
      {errors.itemValue && <span>This field is required</span>}
      <input type="submit" className="cursor-pointer" />
    </form>
  );
};

export default AddItem;
