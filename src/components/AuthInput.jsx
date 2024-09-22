import { InputText } from 'primereact/inputtext'
import React from 'react'

export default function AuthInput({type, context, content_text}) {
  return (

    <div className="">
      <div className="relative flex items-center h-[60px] my-2 gap-4 bg-white rounded ">
        <i className="absolute top-1/2 left-1 -translate-y-1/2 z-50 pi pi-envelope p-3 bg-blue50"></i>
        <span className="p-float-label w-full">
          <InputText
            className="w-full pl-12 p-3 rounded shadow !bg-white"
            id={context}
            name={context}
            type={type}
            placeholder={content_text}
            value={values.context}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </span>
      </div>
      {errors.context && touched.context && (
        <p className="error text-sm text-red-400">{errors.context}</p>
      )}
    </div>
  )
}
