# illustrator-scripts-for-mobile
Our App Designer was very tired of exporting assets in different screen sizes and at multiple resolutions. The following implementation by https://github.com/herkulano/illustrator-scripts-for-mobile helps us to export smarter. I have made some changes to handle retina 3x on IOS and xxhdpi, xxxhdpi on Android. This repo has an Illustrator script which will export assets at different resolutions for Android &amp; IOS

This Adobe Illustrator Script exports layers or artboards to PNGs of different densities (iOS Retina Display, Android Devices, etc) as follows:
* Android - mdpi, hdpi, xhdpi, xxhdpi, xxxhdpi
* IOS - 1x, 2x, 3x


### How to install

If you place the script in the Adobe Illustrator CS5/Presets/en/Scripts folder, the script will appear in the File > Scripts submenu.

If you place the script in another location on the hard disk, you can run the script in Illustrator by choosing File > Scripts > Browse.

### Notes

Artboards:  
Artboards with "!" in their name will not be exported.

Layers:  
Locked layers or with "!" in their name visibility will be ignored and will not be exported.
For example, this can be used to keep global layers visibility or guide layers from being exported.

Scale factor:  
**1** = 100% = 160dpi = mdpi, **2** = 200% = 320dpi = retina display (these values are only valid if you designed for 160dpi aka mdpi).


### Contributors
Forked from https://github.com/herkulano/illustrator-scripts-for-mobile 

### License

[BSD](https://github.com/herkulano/illustrator-scripts-for-mobile/blob/master/LICENSE)
