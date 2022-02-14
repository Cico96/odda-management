import { ApiProperty } from "@nestjs/swagger";

export class NewActivity {

    @ApiProperty({
        type: String
    })
    name: string;

    @ApiProperty({
        type: Number
    })
    billing: number;

}