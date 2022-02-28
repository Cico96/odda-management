import { ApiProperty } from "@nestjs/swagger";

export class CreateProjectRoleDTO {

    @ApiProperty({
        type: String
    })
    type: string;
    
}