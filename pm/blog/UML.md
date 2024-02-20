| Users |
| :--- |
| + _uuid <br/> + name <br/> + last_name <br/> + user_name <br/> + email <br/> + password <br/> + rol <br/> + avatar(image) <br/> + is_active |

| Roles |
| :---: |
| + _rol_id <br/> + name |
| -enum <br/> admin -> institution <br/> parents<br/>teacher |

| Teachers |
| :--- |
| + _teacher_id <br/> + name <br/> + last_name <br/> + age <br/> + birth_date <br/> + specialty <br/> + classroom_id <br/> + is_active |

| Subjects |
| :--- |
| + _subject_id <br/> + name <br/> + teacher_id <br/> + school_grade_id <br/> + school_period_id |

| days_hour |
| :--- |
| + day <br/> + timeInit <br/> + time_finish |

| Parents |
| :--- |
| + _parent_id <br/> + name <br/> + last_name <br/> + is_active |

| Students |
| :--- |
| + _student_id <br/> + name <br/> + last_name <br/> + age <br/> + birth_date <br/> + school_grade_id <br/> + group_id <br/> + classroom_id <br/> + is_active |

| Classrooms |
| :--- |
| + _classroom_id <br/> + name <br/> + is_active |

| School_period |
| :--- |
| + school_period_id <br/> + period |

| Groups |
| :--- |
| + _group_id <br/> + name |

| School_grades |
| :--- |
| + school_grade_id <br/> + name |

| School_period |
| :--- |
| + school_period_id <br/> + period |

| califications |
| :--- |
| + title <br/> + calification |

| Config |
| :--- |
| + _uuid <br/> + institute_name <br/> + address <br/> + country <br/> + phone <br/> + email <br/> + logo(image) |