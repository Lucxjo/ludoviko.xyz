package models

type SocialLinks struct {
	ID          uint   `json:"id" gorm:"primary_key;autoIncrement;not null"`
	SectOnly    bool   `json:"sect_only"`
	Link        string `json:"link" gorm:"default:''"`
	Icon        string `json:"icon" gorm:"default:''"`
	CreatedAt   int64  `json:"created_at" gorm:"autoCreateTime:milli"`
	UpdatedAt   int64  `json:"updated_at" gorm:"autoUpdateTime:milli"`
	Title       string `json:"title" gorm:"default:''"`
	Description string `json:"description" gorm:"default:''"`
}
