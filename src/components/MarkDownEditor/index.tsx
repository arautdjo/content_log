import dynamic from 'next/dynamic';
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm'




import {useId} from 'react';

type MarkDownEditorProps = {
    labelText?:string,
    value:string,
    setValue:React.Dispatch<React.SetStateAction<string>>,
    textAreaName:string,
    disabled?:boolean
}

const MDEditor = dynamic(()=> import('@uiw/react-md-editor'),{
  ssr:false
})

export function MarkDownEditor({
    labelText='',
    disabled=false,
    setValue,
    textAreaName,
    value
 }:MarkDownEditorProps){

    const id = useId()

    return(
        <div className='flex flex-col gap-2'>
      {labelText && (
        <label className='text-sm' htmlFor={id}>
          {labelText}
        </label>
      )}

      <MDEditor
        className='whitespace-pre-wrap'
        value={value}
        onChange={value => {
          if (value === undefined) return;
          setValue(value);
        }}
        height={400}
        // extraCommands={[]}
        preview='edit'
        hideToolbar={disabled}
        textareaProps={{
          id,
          name: textAreaName,
          disabled: disabled,
        }}
        previewOptions={{
          rehypePlugins: [[rehypeSanitize]],
          remarkPlugins: [[remarkGfm]],
        }}
      />
    </div>
    )
}
