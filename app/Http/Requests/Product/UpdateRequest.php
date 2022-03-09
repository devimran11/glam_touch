<?php

namespace App\Http\Requests\Product;


use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
         return [
            'name' => ['required',Rule::unique('products')->ignore($this->id)],
            'category_id' => 'required|integer:min:1',
            'sub_category_id' => 'required|integer:min:1',
            'sub_sub_category_id' => 'nullable|integer:min:1',
            'price' => 'required|integer|min:0',
            'discount' => 'required|integer|min:0',
            'sale_price' => 'required|integer|min:0',
            'details' => 'required',
            'specification' => 'nullable',
            'video_url' => 'nullable',
            'wallet_point' => 'nullable|integer|min:0',
            'seo_title' => 'nullable',
            'seo_description' => 'nullable',
        ];
    }
}
