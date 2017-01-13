'use strict';

var fse = require('fs-extra'),
    request = require('request'),
    url = require('url'),
    path = require('path'),
    fs = require('fs'),
    AdmZip = require('adm-zip');

function copyFolder(fromDir, toDir) {
    fse.copySync(fromDir, toDir);
    console.log('Copied ' + fromDir + ' to ' + toDir);
}

function overlayFiles(targetDir, overlayItems) {
    var overlayItems = (overlayItems) ? overlayItems : [ { from:'Files/BeginFiles', to: 'Begin',  }, { from: 'Files/EndFiles', to: 'End' }];
    overlayItems.forEach(function(overlayItem) {
        if (fse.existsSync(targetDir + '/' + overlayItem.from)) {
            copyFolder(targetDir + '/' + overlayItem.from, targetDir + '/' + overlayItem.to);
        }
    });
}

function downloadAndExtractProjects(callback) {
    var repos = [{ name: 'angular-jumpstart', url: 'https://github.com/DanWahlin/Angular-JumpStart/archive/master.zip' },
                 { name: 'angular-barebones', url: 'https://github.com/DanWahlin/Angular-BareBones/archive/master.zip' },
                 { name: 'angular-helloworld', url: 'https://github.com/DanWahlin/Angular-HelloWorld/archive/master.zip' },
                 { name: 'angular-forms', url: 'https://github.com/DanWahlin/Angular-Forms/archive/master.zip' } ];

    let pending = repos.length;
    //if (!pending) { return callback(new Error('No files found to download')); }

    repos.forEach(function(repo) {
        var filePath = './' + repo.name + '.zip';
        request(repo.url).pipe(
            fse.createWriteStream(filePath).addListener('finish', function() {
                console.log('Extracting: ' + filePath);
                var zip = new AdmZip(filePath);
                zip.extractAllTo('./', true);
                fse.unlink(filePath,function(err) {
                    if (err) {
                        console.log(err);
                        return callback(err);
                    } 
                    if (!--pending) { callback(null); }
                });
            })
        );
    });
}

//Start process
downloadAndExtractProjects(function(err) {
    // var sampleFolders = ['./Samples/Introduction-To-Angular',
    //                      './Samples/Components-And-Modules', 
    //                      './Samples/Template-Expressions-And-Pipes',
    //                      './Samples/Component-Properties-And-Data-Binding',
    //                      './Samples/Services-Providers-And-Http'];

    // sampleFolders.forEach(function(sampleFolder) {
    //     copyFolder('./Angular-HelloWorld-master', sampleFolder + '/Begin');
    //     copyFolder('./Angular-HelloWorld-master', sampleFolder + '/End');
    //     //Overlay Begin/End Files into respective Begin/End folder
    //     overlayFiles(sampleFolder);
    // });

    //Lab 1
    copyFolder('./Angular-HelloWorld-master', './Labs/Getting Started with Angular/Begin');
    overlayFiles('./Labs/Getting Started with Angular');

    //Lab 2 (TypeScript - instructor-led)

    //Lab 3 (Uses the Angular-JumpStart-master source code)

    //Lab 4
    copyFolder('./Angular-JumpStart-master', './Labs/Components and Modules/Begin');
    overlayFiles('./Labs/Components and Modules');

    //Lab 5
    copyFolder('./Angular-HelloWorld-master', './Labs/Interpolation Expressions and Pipes/BeginPipesAndBindings');
    copyFolder('./Angular-HelloWorld-master', './Labs/Interpolation Expressions and Pipes/EndPipesAndBindings');
    overlayFiles('./Labs/Interpolation Expressions and Pipes', [ { from:'Files/BeginPipesAndBindingsFiles', to: 'BeginPipesAndBindings',  }, { from: 'Files/EndPipesAndBindingsFiles', to: 'EndPipesAndBindings' }]);

    copyFolder('./Angular-JumpStart-master', './Labs/Interpolation Expressions and Pipes/Begin');
    overlayFiles('./Labs/Interpolation Expressions and Pipes');

    //Lab 6
    copyFolder('./Angular-JumpStart-master', './Labs/Component Properties and Angular Directives/Begin');
    overlayFiles('./Labs/Component Properties and Angular Directives');

    //Lab 7
    copyFolder('./Angular-JumpStart-master', './Labs/Services Providers and Http/Begin');
    overlayFiles('./Labs/Services Providers and Http');

    //Lab 8
    copyFolder('./Angular-JumpStart-master', './Labs/Working with Routing/Begin');
    overlayFiles('./Labs/Working with Routing');

    //Lab 9
    copyFolder('./Angular-JumpStart-master', './Labs/Route Guards and Lazy Loading/Begin');
    overlayFiles('./Labs/Route Guards and Lazy Loading');

    //Lab 10
    copyFolder('./Angular-JumpStart-master', './Labs/Template and Reactive Forms/Begin');
    overlayFiles('./Labs/Template and Reactive Forms');

});

