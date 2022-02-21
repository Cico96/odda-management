import { ApiProperty } from "@nestjs/swagger";

export class CreateSystemRoleDTO {
    
    @ApiProperty({
        type: String
    })
    type: string;
}