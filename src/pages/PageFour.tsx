//@ts-nocheck
import React from 'react';
import { css } from '@emotion/css';
import { GrafanaTheme2, PageLayoutType } from '@grafana/data';
import { ROUTES } from '../constants';
import { prefixRoute } from '../utils/utils.routing';
import { testIds } from '../components/testIds';
import { PluginPage } from '@grafana/runtime';

import {
  Alert,
  AlertVariant,
  Badge,
  BadgeColor,
  LinkButton,
  BadgeProps,
  Button,
  ButtonVariant,
  ButtonProps,
  Card,
  CardProps,
  Checkbox,
  ClipboardButton,
  CodeEditor,
  Collapse,
  ConfirmModal,
  CustomControlProps,
  CustomScrollbar,
  DateTimePicker,
  DatePickerWithInput,
  Drawer,
  Dropdown,
  Field,
  FieldSet,
  FileDropzone,
  GraphFieldConfig,
  HorizontalGroup,
  Icon,
  IconButton,
  IconButtonVariant,
  IconName,
  IconSize,
  InlineField,
  InlineFieldRow,
  InlineFormLabel,
  InlineLabel,
  InlineSwitch,
  Input,
  Label,
  Link,
  LoadingPlaceholder,
  Menu,
  Modal,
  ModalProps,
  monacoTypes,
  MultiSelect,
  MultiSelectCommonProps,
  OptionsWithLegend,
  OptionsWithTooltip,
  OptionsWithTextFormatting,
  Pagination,
  PanelChrome,
  PanelContext,
  PanelContextProvider,
  RadioButtonList,
  Select,
  SelectableOptGroup,
  SelectCommonProps,
  SelectContainer,
  SeriesVisibilityChangeMode,
  Spinner,
  StackingMode,
  styleMixins,
  Switch as GrafanaSwitch,
  Tab,
  TabContent,
  TabsBar,
  TextArea,
  TimeRangeInput,
  Toggletip,
  ToolbarButton,
  ToolbarButtonRow,
  Tooltip,
  TooltipDisplayMode,
  useStyles2,
  useTheme2,
  VerticalGroup,
} from '@grafana/ui';

export function PageFour() {
  const s = useStyles2(getStyles);
  const theme = useTheme2();

  const components = [
    Alert,
    Badge,
    LinkButton,
    Button,
    Card,
    Checkbox,
    ClipboardButton,
    CodeEditor,
    Collapse,
    ConfirmModal,
    CustomScrollbar,
    DateTimePicker,
    DatePickerWithInput,
    Drawer,
    Dropdown,
    Field,
    FieldSet,
    FileDropzone,
    HorizontalGroup,
    Icon,
    IconButton,
    InlineField,
    InlineFieldRow,
    InlineFormLabel,
    InlineLabel,
    InlineSwitch,
    Input,
    Label,
    Link,
    LoadingPlaceholder,
    Menu,
    Modal,
    MultiSelect,
    Pagination,
    PanelChrome,
    PanelContextProvider,
    RadioButtonList,
    Select,
    SelectContainer,
    SeriesVisibilityChangeMode,
    Spinner,
    StackingMode,
    styleMixins,
    Switch as GrafanaSwitch,
    Tab,
    TabContent,
    TabsBar,
    TextArea,
    TimeRangeInput,
    Toggletip,
    ToolbarButton,
    ToolbarButtonRow,
    Tooltip,
    TooltipDisplayMode,
    useStyles2,
    useTheme2,
    VerticalGroup,
  ];

  for (const c of components) {
    console.log(c);
  }

  return (
    <PluginPage layout={PageLayoutType.Canvas}>
      <div className={s.page} data-testid={testIds.pageFour.container}>
        <div className={s.container}>
          <LinkButton data-testid={testIds.pageFour.navigateBack} icon="arrow-left" href={prefixRoute(ROUTES.One)}>
            Back
          </LinkButton>
          <div className={s.content}>This is a full-width page without a navigation bar.</div>
        </div>
      </div>
    </PluginPage>
  );
}

const getStyles = (theme: GrafanaTheme2) => ({
  page: css`
    padding: ${theme.spacing(3)};
    background-color: ${theme.colors.background.secondary};
    display: flex;
    justify-content: center;
  `,
  container: css`
    width: 900px;
    max-width: 100%;
    min-height: 500px;
  `,
  content: css`
    margin-top: ${theme.spacing(6)};
  `,
});
