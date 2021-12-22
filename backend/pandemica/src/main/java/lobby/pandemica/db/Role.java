package lobby.pandemica.db;

import lombok.*;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Role
{
	public enum ROLES {
		ADMIN,
		MEDICAL_EMPLOYEE,
		STUDENT,
		ACADEMIC_PERSONNEL
	}
	public ROLES role;
}
