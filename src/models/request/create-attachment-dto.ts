import { ApiProperty } from "@nestjs/swagger";

export class CreateAttachmentDTO {

    @ApiProperty({
        type: String
    })
    name: string;

    @ApiProperty({
        type: String
    })
    path: string;

    @ApiProperty({
        type: String
    })
    entity: string;



}