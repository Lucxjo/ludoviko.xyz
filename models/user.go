package models

type User struct {
	ID string `json:"id" gorm:"type:uuid;primary_key;not null; default:uuid_generate_v4()"`
	Username string `json:"username" gorm:"unique;not null"`
	Password string `json:"password" gorm:"not null"`
	CreatedAt   int64  `json:"created_at" gorm:"autoCreateTime:milli"`
	UpdatedAt   int64  `json:"updated_at" gorm:"autoUpdateTime:milli"`
}
