/**
 * TiGram
 *
 * Created by Kosso
 * Copyright (c) 2015 . MIT Licensed.
 */

#import "TiModule.h"

@interface ComKossoTigramModule : TiModule <UIDocumentInteractionControllerDelegate>
{
	UIDocumentInteractionController *interactionController;
}
@property (nonatomic, readonly) id isInstalled;

@end
