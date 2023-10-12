import { Route } from "@angular/router";
import { TestVoiceComponent } from "./test-voice.component";
import { TestDragDropComponent } from "./test-drag-drop/test-drag-drop.component";
import { TestSelectOneComponent } from "./test-select-one/test-select-one.component";
import { TestSelectMultiOptionComponent } from "./test-select-multi-option/test-select-multi-option.component";
import { TestMultiConnectComponent } from "./test-multi-connect/test-multi-connect.component";
import { TestFinalComponent } from "./test-final/test-final.component";
import { TestCountComponent } from "./test-count/test-count.component";
import { TestCheckTruePhraseComponent } from "./test-check-true-phrase/test-check-true-phrase.component";
import { QuestionComponent } from "./question/question.component";




export const TestVoiceRoutes: Route[] = [
    {
        path     : 'test-voice',
        component: TestVoiceComponent
    },
    {
        path     : 'test-drag-drop',
        component: TestDragDropComponent
    },
    {
        path     : 'test-select-one-option',
        component: TestSelectOneComponent
    },
    {
        path     : 'test-select-multi-options',
        component: TestSelectMultiOptionComponent
    },
    {
        path     : 'test-multi-connect',
        component: TestMultiConnectComponent
    },
    {
        path     : 'test-final',
        component: TestFinalComponent
    },
    {
        path     : 'test-count',
        component: TestCountComponent
    },
    {
        path     : 'test-true-phrase',
        component: TestCheckTruePhraseComponent

    },
    {
        path     : 'question',
        component: QuestionComponent

    },

];
