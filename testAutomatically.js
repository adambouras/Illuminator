#import "common/Common.js";
#import "buildArtifacts/testDefinitions.js";

// this file is for use with build machine testing.
// its config settings should not be overwritten.

assertDesiredSimVersion();
if (0 == (config.tagsAny.length + config.tagsAll.length + config.tagsNone.length)) {
    UIALogger.logMessage("No tag sets (any / all / none) were defined, so printing some information about defined scenarios");
    automator.logInfo();
} else {
    automator.runSupportedScenarios(config.tagsAny, config.tagsAll, config.tagsNone, config.automatorSequenceRandomSeed);
}

