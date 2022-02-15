import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDTO {

    @ApiProperty({
        type: String
    })
    name: string;

    @ApiProperty({
        type: String
    })
    surname: string;
    
    @ApiProperty({
        type: String
    })
    password: string;

    @ApiProperty({
        type: String
    })
    city?: string;

    @ApiProperty({
        type: Date
    })
    date: Date;

    @ApiProperty({
        type: String
    })
    birthplace?: string;

    @ApiProperty({
        type: String
    })
    gender?: string;

    @ApiProperty({
        type: String
    })
    contractType: string;

    @ApiProperty({
        type: Number
    })
    grossAnnualSalary?: number;

    @ApiProperty({
        type: String
    })
    businessName?: string;

    @ApiProperty({
        type: String
    })
    vatNumber: string;

    @ApiProperty({
        type: String
    })
    attorny?: string;
}