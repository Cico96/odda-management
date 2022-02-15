import { ApiProperty } from "@nestjs/swagger";

export class CreateActivityDTO {

    @ApiProperty({
        type: String
    })
    name: string;

    @ApiProperty({
        type: Number
    })
    billing: number;

}