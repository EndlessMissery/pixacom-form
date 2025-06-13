import { Controller } from 'react-hook-form';
import QuillEditor from './QuillEditor';
import { validateTitle, validateBody } from '../../hooks/validation';
import './NewPostForm.css';

const NewPostForm = ({
  control,
  register,
  errors,
  isLoading,
  maxTitleLength = 80,
  maxBodyLength = 1000,
  minBodyLength = 50,
  watch,
}) => {
  const titleValue = watch('title');
  const bodyValue = watch('body') || '';
  const strippedBody = bodyValue.replace(/<(.|\n)*?>/g, '').trim();

  return (
    <>
      <label>
        <input
          type="text"
          className="input-modal"
          placeholder="Nadpis příspěvku"
          {...register('title', { validate: value => validateTitle(value, maxTitleLength) })}
          disabled={isLoading}
        />
        {errors.title && <span className="error">{errors.title.message}</span>}
        <div className="char-counter">
          {titleValue?.length || 0}/{maxTitleLength} znaků
        </div>
      </label>

      <label>
        <Controller
          name="body"
          control={control}
          rules={{ validate: value => validateBody(value, minBodyLength, maxBodyLength) }}
          render={({ field }) => (
            <>
              <QuillEditor
                value={field.value || ''}
                onChange={field.onChange}
                readOnly={isLoading}
              />
              {errors.body && <span className="error">{errors.body.message}</span>}
              <div className="char-counter">
                {strippedBody.length}/{maxBodyLength} znaků
              </div>
            </>
          )}
        />
      </label>
    </>
  );
};

export default NewPostForm;
