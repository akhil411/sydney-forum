<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class EnquiryListResource extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'            => $this->id,
            'subject'       => $this->subject,
            'user_id'       => $this->user->id,
            'user_name'     => $this->user->name,
            'created_at'    => $this->created_at,
            'enquiry_route' => route('enquiry.show', $this->id)
        ];
    }
}
