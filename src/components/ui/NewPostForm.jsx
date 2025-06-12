import { Controller } from 'react-hook-form';
import QuillEditor from './QuillEditor';
import { validateTitle, validateBody } from '../../hooks/validation';
import './NewPostForm.css';

const NewPostForm = ({
  control,
  register,
  errors,
  isLoading,
  maxTitleLength,
  maxBodyLength,
  minBodyLength,
  watch,
}) => {
  const titleValue = watch('title');
  const bodyValue = watch('body') || '';

  const titleErrorMessage = validateTitle(titleValue, maxTitleLength) !== true ? validateTitle(titleValue, maxTitleLength) : null;
  const bodyErrorMessage = validateBody(bodyValue, minBodyLength, maxBodyLength) !== true ? validateBody(bodyValue, minBodyLength, maxBodyLength) : null;

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
        {(titleErrorMessage) && <span className="error">{titleErrorMessage}</span>}
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
              {bodyErrorMessage && <span className="error">{bodyErrorMessage}</span>}
              <div className="char-counter">
                {strippedBody.length}/{maxBodyLength} znaků
              </div>
            </>
          )}
        />
        {errors.body && <span className="error">{errors.body.message}</span>}
      </label>
    </>
  );
};

export default NewPostForm;
