/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      ref: {
        color: {
          sangria: {
            50: "#fff1f1",
            100: "#ffdfdf",
            200: "#ffc5c5",
            300: "#ff9c9c",
            400: "#ff6363",
            500: "#ff3232",
            600: "#ef1313",
            700: "#c90c0c",
            800: "#a60e0e",
            900: "#911414",
            950: "#4b0404"
          },
          goldDrop: {
            50: "#fffaed",
            100: "#fff3d5",
            200: "#ffe4a9",
            300: "#fecf73",
            400: "#fcb03b",
            500: "#fa9615",
            600: "#f47f0c",
            700: "#c35d0b",
            800: "#9b4911",
            900: "#7d3e11",
            950: "#431d07"
          },
          goldenFizz: {
            50: "#fcfee8",
            100: "#f8fec3",
            200: "#f7ff89",
            300: "#f9fe3b",
            400: "#fbf814",
            500: "#ebde07",
            600: "#cbaf03",
            700: "#a27f06",
            800: "#86630d",
            900: "#725111",
            950: "#422b06"
          },
          chathamsBlue: {
            50: "#f3f7fc",
            100: "#e5f0f9",
            200: "#c5dff2",
            300: "#93c5e6",
            400: "#59a7d7",
            500: "#338dc4",
            600: "#2470a5",
            700: "#1c547d",
            800: "#1d4d6f",
            900: "#1d425d",
            950: "#132a3e"
          },
          lima: {
            50: "#f0fce9",
            100: "#def7d0",
            200: "#bff0a6",
            300: "#96e472",
            400: "#73d447",
            500: "#5ccf2d",
            600: "#3c941c",
            700: "#30711a",
            800: "#2a5a1a",
            900: "#254d1a",
            950: "#102a09"
          },
          tapa: {
            50: "#f4f3f2",
            100: "#e2e1df",
            200: "#c7c4c1",
            300: "#a7a29d",
            400: "#8e8781",
            500: "#78716c",
            600: "#6d6561",
            700: "#585250",
            800: "#4d4846",
            900: "#443f3f",
            950: "#262322"
          },
          jumbo: {
            50: "#f5f5f6",
            100: "#e6e6e7",
            200: "#cfcfd2",
            300: "#adadb3",
            400: "#84848c",
            500: "#71717a",
            600: "#5a5a60",
            700: "#4d4c52",
            800: "#434347",
            900: "#3c3b3e",
            950: "#252527"
          },
          paleSky: {
            50: "#f7f8f8",
            100: "#edeef1",
            200: "#d8dbdf",
            300: "#b6bac3",
            400: "#8e95a2",
            500: "#6b7280",
            600: "#5b616e",
            700: "#4a4e5a",
            800: "#40444c",
            900: "#383a42",
            950: "#25272c"
          }
        },
        size: {
          base: "16",
          scale: {
            12: "0.125",
            25: "0.25",
            50: "0.50",
            75: "0.75",
            125: "1.25",
            150: "1.50",
            200: "2.00",
            250: "2.50",
            300: "3.00",
            400: "4.00",
            default: "100"
          }
        },
        borderRadius: {
          12: "16 / 100 * 12.5",
          25: "16 / 100 * 25",
          37: "16 / 100 * 37.5",
          50: "16 / 100 * 50",
          75: "16 / 100 * 75",
          100: "16 / 100 * 100",
          150: "16 / 100  * 150",
          200: "16 / 100  * 200",
          400: "16 / 100 * 400",
          base: "16 / 100",
          pill: "1000",
          none: "0"
        },
        borderWidth: {
          1: "1",
          2: "2",
          3: "3",
          4: "4",
          none: "0"
        },
        boxShadow: {
          blurry: {
            0: {
              blur: "0",
              spread: "0",
              color: "rgba(0,0,0,0)",
              type: "innerShadow",
              offsetX: "0",
              offsetY: "0"
            },
            1: {
              blur: "2",
              spread: "0",
              color: "rgba(#000, 0.1)",
              type: "innerShadow",
              offsetX: "0",
              offsetY: "1"
            },
            2: {
              blur: "4",
              spread: "0",
              color: "rgba(#000, 0.1)",
              type: "innerShadow",
              offsetX: "0",
              offsetY: "2"
            },
            3: {
              blur: "8",
              spread: "0",
              color: "rgba(#000, 0.1)",
              type: "innerShadow",
              offsetX: "0",
              offsetY: "2"
            },
            4: {
              blur: "16",
              spread: "0",
              color: "rgba(#000, 0.1)",
              type: "innerShadow",
              offsetX: "0",
              offsetY: "4"
            },
            8: {
              blur: "64",
              spread: "0",
              color: "rgba(#000, 0.1)",
              type: "innerShadow",
              offsetX: "0",
              offsetY: "4"
            }
          },
          intensity: "0.1",
          edgy: {
            0: {
              blur: "0",
              spread: "0",
              color: "#000",
              type: "innerShadow",
              offsetX: "0",
              offsetY: "0"
            },
            1: {
              blur: "0",
              spread: "0",
              color: "rgba(#000, 0.1)",
              type: "dropShadow",
              offsetX: "0",
              offsetY: "2"
            },
            2: {
              blur: "0",
              spread: "0",
              color: "rgba(#000, 0.1)",
              type: "dropShadow",
              offsetX: "0",
              offsetY: "4"
            },
            3: {
              blur: "0",
              spread: "0",
              color: "rgba(#000, 0.1)",
              type: "dropShadow",
              offsetX: "0",
              offsetY: "8"
            }
          }
        },
        lineHeight: {
          112: "112.5%",
          125: "125%",
          150: "150%",
          200: "200%",
          default: "100%"
        },
        fontSize: {
          rem: "16",
          typescale: {
            scale: "1.25",
        "2xs": "16 / 1.25 / 1.25 / 1.25",
            xs: "16 / 1.25 / 1.25",
            sm: "16 / 1.25",
            md: "16",
            lg: "16 * 1.25",
            xl: "16 * 1.25 * 1.25",
        "2xl": "16 * 1.25 * 1.25 * 1.25"
          }
        },
        paragraphSpacing: {
          none: "0.0",
          sm: "0.25",
          md: "0.5",
          lg: "0.75",
          xl: "1"
        }
      },
      sem: {
        size: {
          web: {
            breakpoint: {
              sm: "576",
              md: "768",
              lg: "1024",
              xl: "1280",
          "2xl": "1536"
            },
            columns: {
              sm: "1",
              md: "2",
              lg: "4",
              xl: "6"
            }
          },
          icon: {
            sm: "16",
            md: "16 * 1.50",
            lg: "16 * 2.50",
            xl: "16 * 4.00"
          },
          interactive: {
            xs: "16",
            sm: "16 * 2.00",
            md: "16 * 3.00",
            lg: "16 * 4.00"
          }
        },
        space: {
          page: {
            inset: {
              none: "0",
              sm: "16",
              md: "16 * 1.50",
              lg: "16 * 2.00"
            },
            inside: {
              none: "0",
              xs: "16 * 0.25",
              sm: "16 * 0.50",
              md: "16",
              lg: "16 * 2.00",
              xl: "16 * 4.00"
            }
          },
          container: {
            inside: {
              none: "0",
              xs: "16 * 0.25",
              sm: "16 * 0.50",
              md: "16",
              lg: "16 * 2.00"
            },
            inset: {
              none: "0",
              xs: "16 * 0.25",
              sm: "16 * 0.50",
              md: "16",
              lg: "16 * 2.00"
            },
            stack: {
              sm: "16 * 0.50",
              md: "16",
              lg: "16 * 1.50"
            },
            border: {
              none: "0",
              sm: "2",
              md: "4",
              lg: "6"
            }
          },
          interactive: {
            inset: {
              none: "0",
              sm: "16 * 0.50",
              md: "16 * 0.75",
              lg: "16"
            },
            inside: {
              none: "0",
              xs: "16 * 0.125",
              sm: "16 * 0.25",
              md: "16 * 0.50",
              lg: "16"
            },
            stack: {
              sm: "16 * 0.50",
              md: "16",
              lg: "16 * 1.50"
            },
            border: {
              none: "0",
              sm: "2",
              md: "4",
              lg: "6"
            }
          }
        },
        color: {
          feedback: {
            success: "#5ccf2d",
            onSuccess: "#f7f8f8",
            info: "#338dc4",
            onInfo: "#f3f7fc",
            warning: "#fcb03b",
            onWarning: "#431d07",
            error: "#ff3232",
            onError: "#fff1f1",
            danger: "#ef1313",
            onDanger: "#fff1f1"
          },
          interactive: {
            primary: {
              muted: "#59a7d7",
              default: "#338dc4",
              emphasis: "#2470a5"
            },
            onPrimary: "#f7f8f8",
            secondary: {
              muted: "#adadb3",
              default: "#71717a",
              emphasis: "#4d4c52"
            },
            onSecondary: "#f7f8f8",
            tertiary: {
              muted: "#b6bac3",
              default: "#6b7280",
              emphasis: "#4a4e5a"
            },
            onTertiary: "#f7f8f8"
          },
          canvas: {
            primary: "#f7f8f8",
            secondary: "#edeef1"
          },
          container: {
            primary: "#edeef1",
            secondary: "#d8dbdf"
          },
          content: {
            primary: "#443f3f",
            secondary: "#6d6561",
            tertiary: "#8e8781",
            disabled: "#a7a29d",
            placeholder: "#8e8781"
          }
        },
        modifiers: {
          enabledAlpha: "1",
          disabledAlpha: "0.5",
          hoverLightnessDelta: "0.1",
          pressedLightnessDelta: "0.1"
        },
        border: {
          interactive: {
            radius: {
              none: "0",
              sm: "2",
              md: "4",
              lg: "8",
              xl: "16",
              pill: "1000"
            },
            width: {
              none: "0",
              sm: "1",
              md: "2",
              lg: "3"
            },
            spacing: {
              none: "0",
              sm: "2",
              md: "4",
              lg: "6"
            },
            style: {
              none: "none",
              default: "solid",
              dashed: "dashed",
              dotted: "dotted"
            }
          },
          container: {
            radius: {
              none: "0",
              sm: "4",
              md: "8",
              lg: "16",
              xl: "32",
              pill: "1000"
            },
            width: {
              none: "0",
              sm: "1",
              md: "2",
              lg: "4"
            },
            spacing: {
              none: "0",
              sm: "2",
              md: "4",
              lg: "6",
              style: "dotted"
            }
          }
        },
        boxShadow: {
          intensity: "0.1"
        },
        interactive: {
          boxShadow: {
        "elevation_1": {
              blur: "4",
              spread: "0",
              color: "rgba(#000, 0.1)",
              type: "innerShadow",
              offsetX: "0",
              offsetY: "2"
            },
        "elevation_2": {
              blur: "8",
              spread: "0",
              color: "rgba(#000, 0.1)",
              type: "innerShadow",
              offsetX: "0",
              offsetY: "2"
            }
          },
          container: {
        "elevation_2": {
              blur: "8",
              spread: "0",
              color: "rgba(#000, 0.1)",
              type: "innerShadow",
              offsetX: "0",
              offsetY: "2"
            },
        "elevation_3": {
              blur: "16",
              spread: "0",
              color: "rgba(#000, 0.1)",
              type: "innerShadow",
              offsetX: "0",
              offsetY: "4"
            },
        "elevation_4": {
              blur: "64",
              spread: "0",
              color: "rgba(#000, 0.1)",
              type: "innerShadow",
              offsetX: "0",
              offsetY: "4"
            }
          }
        },
        text: {
          title: {
            fontFamily: "Arial",
            fontWeight: {
              muted: "500",
              default: "600",
              emphasis: "800"
            },
            fontSize: {
              sm: "16 / 1.25",
              md: "16",
              lg: "16 * 1.25",
              xl: "16 * 1.25 * 1.25",
          "2xl": "16 * 1.25 * 1.25 * 1.25"
            },
            paragraphSpacing: "none",
            lineHeight: "125%",
            typography: {
              sm: {
                fontFamily: "Arial",
                fontWeight: "600",
                fontSize: "16 / 1.25",
                lineHeight: "125%"
              },
              md: {
                fontFamily: "Arial",
                fontWeight: "600",
                fontSize: "16",
                lineHeight: "125%"
              },
              lg: {
                fontFamily: "Arial",
                fontWeight: "600",
                fontSize: "16 * 1.25",
                lineHeight: "125%"
              },
              xl: {
                fontFamily: "Arial",
                fontWeight: "800",
                fontSize: "16 * 1.25 * 1.25",
                lineHeight: "125%"
              },
          "2xl": {
                fontFamily: "Arial",
                fontWeight: "800",
                fontSize: "16 * 1.25 * 1.25 * 1.25",
                lineHeight: "125%"
              }
            }
          },
          body: {
            fontFamily: "Arial",
            fontWeight: {
              muted: "300",
              default: "400",
              emphasis: "600"
            },
            fontSize: {
              sm: "16 / 1.25 / 1.25",
              md: "16 / 1.25",
              lg: "16",
              xl: "16 * 1.25",
          "2xl": "16 * 1.25 * 1.25"
            },
            paragraphSpacing: "0.5",
            lineHeight: "112.5%",
            typography: {
              sm: {
                fontFamily: "Arial",
                fontWeight: "400",
                fontSize: "16 / 1.25 / 1.25",
                lineHeight: "112.5%"
              },
              md: {
                fontFamily: "Arial",
                fontWeight: "400",
                fontSize: "16 / 1.25",
                lineHeight: "112.5%"
              },
              lg: {
                fontFamily: "Arial",
                fontWeight: "400",
                fontSize: "16",
                lineHeight: "112.5%"
              },
              xl: {
                fontFamily: "Arial",
                fontWeight: "600",
                fontSize: "16 * 1.25",
                lineHeight: "125%"
              }
            }
          },
          helper: {
            fontFamily: "Arial",
            fontWeight: {
              muted: "200",
              default: "300",
              emphasis: "500"
            },
            fontSize: {
              sm: "16 / 1.25 / 1.25 / 1.25",
              md: "16 / 1.25 / 1.25",
              lg: "16 / 1.25"
            },
            paragraphSpacing: "0.25",
            lineHeight: "100%",
            typography: {
              sm: {
                fontFamily: "Arial",
                fontWeight: "300",
                fontSize: "16 / 1.25 / 1.25 / 1.25",
                lineHeight: "100%"
              },
              md: {
                fontFamily: "Arial",
                fontWeight: "300",
                fontSize: "16 / 1.25 / 1.25",
                lineHeight: "100%"
              }
            }
          }
        }
      }
    },
  },
}