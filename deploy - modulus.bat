REM echo Copy files to Deploy folder

REM RMDIR /S /Q deploy

REM XCOPY "api" "deploy\api" /E /C /R /I /K /Y 
REM XCOPY "app" "deploy\app" /E /C /R /I /K /Y 
REM XCOPY "setup" "deploy\setup" /E /C /R /I /K /Y 
REM XCOPY "*.js" "deploy\" /C /R /I /K /Y
REM XCOPY "*.json" "deploy\" /C /R /I /K /Y

REM modulus deploy -p Beyondpad deploy

echo Deploy to Modulus

modulus deploy -p Beyondpad --force-npm-install

echo Done!

pause