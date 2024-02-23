Diagrama UML (Versión 2)

Entidades Internas
---
* *`El usuario más común tendrá el rol de PARENT`*
* *`Cuál es el relacionamiento entre parents y students?`*

| Users |
| :--- |
| + _uuid <br/> + name <br/> + last_name <br/> + user_name <br/> + email <br/> + password <br/> + rol <br/> + avatar(image) <br/> + is_active |

| Config |
| :--- |
| + _uuid <br/> + institute_name <br/> + address <br/> + country <br/> + phone <br/> + email <br/> + logo(image) |

| Roles |
| :---: |
| + _rol_id <br/> + name |
| -enum <br/> admin -> institution <br/> parent<br/>teacher |

| Parents |
| :--- |
| + _parent_id <br/> + name <br/> + last_name <br/> + is_active |

Entidades Externas
---

| Teachers |
| :--- |
| + _teacher_id <br/> + name <br/> + last_name <br/> + birth_date <br/> + subject_id <br/> + class_grade__id <br/> + is_active |

| Students |
| :--- |
| + _student_id <br/> + name <br/> + last_name <br/> + birth_date <br/> + school_grade_id <br/> + group_id <br/> + is_active |

| Subjects |
| :--- |
| + _subject_id <br/> + name <br/> + _teacher_id <br/> + class_grade_id <br/> + school_period_id |

* *`Incluye los campos de la tabla days_hour(v1):`*

| School_period |
| :--- |
| + school_period_id <br/> + class_grade_id <br/> + day <br/> + hour_start <br/> + hour_finish |

* *`Reemplaza a School_grades y a Classrooms:`*

| Class_grades |
| :--- |
| + class_grade_id <br/> + year <br/> + division |

* *`Reemplaza a Califications:`*

| Marks |
| :--- |
| + marks_id <br/> + subject_id <br/> + student_id <br/> + mark |

| Groups |
| :--- |
| + _group_id <br/> + _teacher_id |