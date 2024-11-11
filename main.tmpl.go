package main

import (
	"demo2/app"
	"embed"
	"log"

	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"
)

//go:embed frontend/dist
var assets embed.FS

func main() {
	// Create an instance of the app structure
	App := app.NewApp()

	// Create application with options
	err := wails.Run(&options.App{
		Title:            "{{.ProjectName}}",
		Width:            1024,
		Height:           768,
		MinWidth:         1024,
		MinHeight:        768,
		Assets:           assets,
		OnStartup:        App.Startup,
		OnDomReady:       App.DomReady,
		OnBeforeClose:    App.BeforeClose,
		OnShutdown:       App.Shutdown,
		WindowStartState: options.Normal,
		Bind: []interface{}{
			App,
		},
	})

	if err != nil {
		log.Fatal(err)
	}
}
